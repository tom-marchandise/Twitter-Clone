<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ControllerDisplayTweets extends Controller
{
    public function getTweets($userId)
    {
        $tweets = DB::table('user')
            ->join('post', 'user.id', '=', 'user_id')
            ->leftJoin('images', 'post.id', '=', 'images.post_id')
            ->select('post.*', 'images.images_url AS imageURL', 'user.username', 'user.name', 'user.photo_user AS pdp')
            ->orderBy('post.id', 'desc')
            ->where('post.user_id', $userId)
            ->where('post.post_id', '=', null)
            ->get();
        return $tweets;
    }
    public function getTweetId($id)
    {
        $tweets = DB::table('user')
            ->join('post', 'user.id', '=', 'user_id')
            ->leftJoin('images', 'post.id', '=', 'images.post_id')
            ->select('post.*', 'images.images_url AS imageURL', 'user.username', 'user.name', 'user.photo_user AS pdp')
            ->orderBy('post.id', 'desc')
            ->where('post.id', $id)
            ->get();
        // $tweets = DB::table('post')->find($id);
        return $tweets;
    }
    public function getComs($id)
    {
        $tweets = DB::table('user')
            ->leftJoin('post', 'user.id', '=', 'user_id')
            ->leftJoin('images', 'post.id', '=', 'images.post_id')
            ->select('post.*', 'images.images_url AS imageURL', 'user.username', 'user.name', 'user.photo_user AS pdp')
            ->orderBy('post.id', 'desc')
            ->where('post.post_id', $id)
            ->get();
        return $tweets;
    }
    public function getHashtagTweets($hashtag)
    {
        $tweets = DB::table('joinhtag')
        ->join('htag', 'joinhtag.htag_id', '=', 'htag.id')
        ->join('post', 'joinhtag.post_id', '=', 'post.id')
        ->leftJoin('images', 'post.id', '=', 'images.post_id')
        ->join('user', 'post.user_id', '=', 'user.id')
        ->select('user.*', 'post.*', 'images.images_url AS imageURL')
        ->orderBy('post.id', 'desc')
        ->where('htag.body', '=', "#$hashtag")
        ->get();
        return $tweets;
    }

    public function getPredHtag($htag)
    {
        Log::error($htag);
        $pred = DB::table('htag')
            ->select('body')
            ->where('body', 'like', "#$htag%")
            ->get();
        return $pred;
    }
}
