<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\modelImgTweet;
use http\Env\Response;
use http\Params;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        $user = new User([
            'username' => '@' . $data['username'],
            'name' => $data['name'],
            'email' => $data['email'],
            'pass' => bcrypt($data['pass']),
            'birthdate' => $data['birthdate'],
        ]);
        $user->save();


        return response()->json(['user' => $user]);
    }

    public function signin(Request $request)
    {

        if (!Auth::attempt(['email' => $request['email'], 'password' => $request['pass']])) {
            return \response()->json(['message' => 'Identifiants incorrects'], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => new UserResource($user),
/*            'token_type' => 'bearer',
            'expires_in' => $expiresInMinutes * 60,*/
        ]);
    }

/*
        if (! $token = Auth::attempt(['email' => $request['email'], 'password' => $request['pass']])) {
            return response()->json(['error' => 'Identifiants incorrects'], 401);
        }


        $user = Auth::user();
        $expiresInMinutes = 60;*/

/*        $user = new \App\Models\User();
        $user->username = $data['username'];
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->photo = '';
        $user->banniere_user = '';
        $user->pass = $data['pass'];
        $user->status = 'active';
        $user->created_at;
        $user->modify_at;
        $user->save()*/

    public function getUser ($username)
    {
        $idUser = DB::table('user')
            ->select('*')
            ->where('username', '=', $username)
            ->get();
        Log::error($username);
        return $idUser;
    }





    function setProfile (Request $request, $id) 
    {
       
        $image = $request->file('file');
        $imagePath = $image->store('image', 'public');
        
        $user = User::find($id);
        $user->photo_user = $imagePath;
        $user->save();
    }

    function getUsers (Request $request){
        Log::error($request['search']);
        $search = $request['search'];
        $user = DB::table('user')
            ->select('name', 'username', 'photo_user')
            ->where('username', 'like', "@$search%")
            ->get();
        return $user;
    }
}

