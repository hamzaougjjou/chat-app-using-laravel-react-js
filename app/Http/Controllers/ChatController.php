<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ChatController extends Controller
{
    //get all conversations for auth user
    public function index()
    {
        // Get the authenticated user
        $auth_id = Auth::user()->id;

        // using query builder:
        $conversations = DB::table('messages')
            ->join(DB::raw("(SELECT MAX(id) as lastid
                        FROM messages
                        WHERE (messages.reciever_id = ?  OR messages.emitter_id = ? )
                        GROUP BY CONCAT(LEAST(messages.reciever_id , messages.emitter_id), 
                        '.', GREATEST(messages.reciever_id , messages.emitter_id))) as conversations"), function ($join) {
                $join->on('messages.id', '=', 'conversations.lastid');
            })
            ->select('messages.*')
            ->orderBy('messages.created_at', 'DESC')
            ->setBindings([$auth_id, $auth_id])
            ->get();


        foreach ($conversations as $item) {
            # code...

            if ($item->emitter_id == $auth_id) {
                # code...
                $item->user = User::find($item->reciever_id);
            } else {
                $item->user = User::find($item->emitter_id);
            }

            $item->message = Message::where('emitter_id', '=', $auth_id)
                ->where('reciever_id', '=', $item->user->id)
                ->orWhere('emitter_id', '=', $item->user->id)
                ->where('reciever_id', '=', $auth_id)
                ->latest()
                ->first()
            ;

            $item->message->time = $item->message->created_at->diffForHumans();;
        }

        // You can now use $conversations to display or manipulate the conversations
        return response()->json([
            'success' => true,
            "conversations" => $conversations,
            'info' => "message send successfully"
        ]);
    }
}
