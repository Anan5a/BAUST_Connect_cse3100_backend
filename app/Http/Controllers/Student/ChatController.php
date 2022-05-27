<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreChatRequest;
use App\Http\Requests\ViewChatListRequest;
use App\Http\Requests\ViewChatRequest;
use App\Models\Chat;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use function PHPUnit\Framework\returnArgument;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(ViewChatListRequest $request)
    {
        //load list of messages
        $list = Chat::where("from",Auth::user()->id)
            ->latest()
            //->orderBy('created_at','desc')
            //->distinct('to')
            ->groupBy('to')
            ->with('receiver');
        return \response()->json(["status"=>"ok","message"=>"List","data"=>$list->get()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    //send message
    public function store(StoreChatRequest $request)
    {
        $data = $request->validated();
        $data["from"] = Auth::user()->id;
        try {
            $message = Chat::create($data);
            return response()->json(["status"=>"ok","message"=>"Sent","data"=>$message]);
        }catch (\Exception $e){
            return response()->json(["status"=>"error","message"=>"Failed"], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    //receive message
    public function receive(ViewChatRequest $request)
    {

    }
}
