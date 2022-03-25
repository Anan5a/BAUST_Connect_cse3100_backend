<?php

namespace App\Http\Controllers\Shared;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactChannelRequest;
use App\Http\Requests\UpdateContactChannelRequest;
use App\Models\ContactChannel;

class ContactChannelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreContactChannelRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContactChannelRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ContactChannel  $contactChannel
     * @return \Illuminate\Http\Response
     */
    public function show(ContactChannel $contactChannel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ContactChannel  $contactChannel
     * @return \Illuminate\Http\Response
     */
    public function edit(ContactChannel $contactChannel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateContactChannelRequest  $request
     * @param  \App\Models\ContactChannel  $contactChannel
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateContactChannelRequest $request, ContactChannel $contactChannel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContactChannel  $contactChannel
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContactChannel $contactChannel)
    {
        //
    }
}
