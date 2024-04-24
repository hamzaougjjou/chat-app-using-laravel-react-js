<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Friend;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function index()
    {

        $auth_id = Auth::id();
        $users = User::
            where("id", "!=", $auth_id)
            ->paginate(10);

        if (!$users) {
            return response()->json([
                "success" => false,
                "code" => -1,
                "message" => "users not found"
            ], 200);
        }

        //friend_status 
        foreach ($users as $user) {
            $friend = Friend::where('request_from', '=', $auth_id)
                ->where('request_to', '=', $user->id)
                ->orWhere('request_from', '=', $user->id)
                ->where('request_to', '=', $auth_id)
                ->first();


            if ($friend == null) {
                $user->friend_status = -1;
                # code...
            } else if ($friend->accepted) {
                $user->friend_status = 1;
            }
            else if ( $friend->accepted == false && $friend->request_from == $auth_id) {
                $user->friend_status = 0;
            }
            else if ( $friend->accepted == false && $friend->request_to == $auth_id) {
                $user->friend_status = 2;
            }

        }

        return response()->json([
            "success" => true,
            "users" => $users,
            "message" => "users info retrieved successfully"
        ], 200);
        
    }


    public function friends($userId)
    {
        $friends = [];
        return response()->json([
            "success" => true,
            "friends" => $friends,
            "status" => 200
        ]);
    }

}
