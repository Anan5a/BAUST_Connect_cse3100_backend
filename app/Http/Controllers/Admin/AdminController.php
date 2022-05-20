<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAdminRequest;
use App\Http\Requests\UpdateAdminRequest;
use App\Http\Requests\ViewAdminRequest;
use App\Http\Resources\AdminResource;
use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;
use Symfony\Component\HttpFoundation\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AdminResource
     */
    public function index(ViewAdminRequest $request)
    {
        return new AdminResource(Admin::paginate(50));
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
     * @param  \App\Http\Requests\StoreAdminRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAdminRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateAdminRequest  $request
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateAdminRequest $request, Admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Admin $admin)
    {
        //
    }
    public function login(Request $request){

        $id = $request->post('emailorid');
        $password = $request->post('password');
        if (Auth::guard("admins")->attempt([
            'uni_per_id'=>$id,
            'password'=>$password
        ])){
            $request->session()->regenerate();
            return Response::json(['status'=>'ok','data'=>Auth::guard("admins")->user()]);
        }
        return \response()->json(['status'=>'error','message'=>'Invalid user or password'], \Symfony\Component\HttpFoundation\Response::HTTP_UNAUTHORIZED);
    }
    /**
     * logout user
     */
    public function logout(Request $request){
        if (Auth::guard("admins")->check()){
            Auth::guard("admins")->logout();
            return Response::json(['status'=>'ok','message'=>'Logged out successfully!']);

        }
        return Response::json(['status'=>'error','message'=>'Failed to logout'], \Symfony\Component\HttpFoundation\Response::HTTP_UNAUTHORIZED);
    }
}
