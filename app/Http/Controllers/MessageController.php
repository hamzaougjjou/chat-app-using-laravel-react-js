<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Message;
use App\Models\File;
use Carbon\Carbon;
use Illuminate\Http\Request;
// use App\Http\Controllers\TimeConverter;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use DB;

class MessageController extends Controller
{
    public function index($user_id)
    {
        $auth_id = Auth::user()->id;

        $messages = Message::where('emitter_id', '=', $auth_id)
            ->where('reciever_id', '=', $user_id)
            ->orWhere('emitter_id', '=', $user_id)
            ->where('reciever_id', '=', $auth_id)
            ->get()
        ;

        $user = User::find($user_id);

        if (!$user) {
            return response()->json([
                'success' => false,
                "code" =>404,
                'error' => "user not found"
            ]);
        }

        foreach ($messages as $message) {
            # code...
            $message->time = $message->created_at->diffForHumans();
            // $message->time = TimeConverter::secondsToTime(time() - strtotime($message->created_at));
        }

        return response()
            ->json([
                "success" => true,
                "user" => $user,
                "messages" => $messages
            ], 200);
    }

    public function store(Request $request, $reciever_id) //store message in db
    {
        $auth_id = Auth::user()->id;
        //check in reciever user exist in db
        $reciever_user = User::find($reciever_id);

        if ($reciever_user == null) {
            return response()->json([
                'success' => false,
                'error' => "user not found"
            ]);
        }


        $message = Message::create(
            [
                "content" => $request->content,
                "emitter_id" => $auth_id,
                "reciever_id" => $reciever_id
            ]
        );

        $message->seen = false;
        $message->time = $message->created_at->diffForHumans();

        return response()->json([
            'success' => true,
            "message" => $message,
            'info' => "message send successfully"
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}