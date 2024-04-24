<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Friend;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class FriendsController extends Controller
{



    public function index()
    {

        $auth_id = Auth::id();
        $friends_id = [];

        $friends = Friend::where('request_from', '=', $auth_id)
            ->orWhere('request_to', '=', $auth_id)
            ->where('accepted', true)
            ->get();

        foreach ($friends as $friend) {
            # code...
            if ($friend->request_from == $auth_id) {
                array_push($friends_id, $friend->request_to);
            } else {
                array_push($friends_id, $friend->request_from);
            }


        }

        $users = User::whereIn('id', $friends_id)->paginate(10);

        return response()->json([
            "success" => true,
            "users" => $users,
            "friends_id" => $friends_id,
            "message" => "users info retrieved successfully"
        ], 200);

    }


    public function sendRequest(Request $request)
    {
        $auth_user = Auth::id();
        // check if user exist in db
        $req_to_id_exist = User::find($request->id);
        if ($req_to_id_exist == null) {
            return response()->json([
                "success" => false,
                "data" => null,
                "message" => 'user not found'
            ], 404);
        }
        //check if request already exists
        $request_exist = Friend::where('request_from', '=', $auth_user)
            ->where('request_to', '=', $request->id)

            ->orWhere('request_from', '=', $request->id)
            ->where('request_to', '=', $auth_user)

            ->count() > 0;

        if ($request_exist) {
            return response()->json([
                "success" => false,
                "data" => null,
                "message" => 'request already exists'
            ], 200);
        }

        $friendRequest = Friend::create([
            'request_from' => $auth_user,
            'request_to' => $request->id,
        ]);

        return response()->json([
            "success" => true,
            "data" => $friendRequest,
            "message" => "friend request sent successfully"
        ], 200);
    }
    public function acceptRequest($id)
    {
        $auth_user = Auth::user()->id;

        $friend = Friend::where('request_from', '=', $auth_user)
            ->where('request_to', '=', $id)
            ->orWhere('request_from', '=', $id)
            ->where('request_to', '=', $auth_user)
            ->first();

        $friend->accepted = true;
        $friend->save();


        return response()->json([
            "success" => true,
            "message" => 'friend accepted'
        ], 200);
    }

    public function destroy($id) //$id => id of user that recieve request
    {
        $auth_user = Auth::user()->id;

        $friend = Friend::where('request_from', '=', $auth_user)
            ->where('request_to', '=', $id)
            ->orWhere('request_from', '=', $id)
            ->where('request_to', '=', $auth_user)
            ->first();

        if ($friend) {
            $friend->delete();
        }


        return response()->json([
            "success" => true,
            "friend" => $friend,
            "message" => 'friend accepted'
        ], 200);
    }



}