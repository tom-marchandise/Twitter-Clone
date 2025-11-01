<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\modelFollow;
use Illuminate\Http\Request;

class ControllerFollow extends Controller
{
    public function follow(Request $request)
    {
        $data = $request->validate([
            'frui' => 'int',
            'fdui' => 'int',
            'followed_created_at' => 'date'
        ]);

        $follow = new modelFollow([
            'follower_user_id' => $data['frui'],
            'followed_user_id' => $data['fdui'],
            'followed_created_at' => DATE(NOW())
        ]);
        $follow->save();
    }
}
