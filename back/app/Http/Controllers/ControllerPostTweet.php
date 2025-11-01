<?php

namespace App\Http\Controllers;

use App\Models\ModelHtags;
use App\Models\ModelImgTweet;
use App\Models\ModelJoinHtags;
use http\Client\Curl\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\ModelPostTweet;

use function Laravel\Prompts\error;

class ControllerPostTweet extends Controller
{
    public function postTweet(Request $request)
    {

        $data = $request->validate([
            'text' => 'nullable|string',
            'userId' => 'string',
            'created_at' => 'date',
            'file' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:4096'
        ]);

        $post = new ModelPostTweet([
            'body' => $data['text'],
            'user_id' => $data['userId'],
            'created_at' => DATE(NOW())
        ]);
        Log::error($post->save());
        $post->save();

        $matches = explode(' ', $data['text']);
        $idPost = DB::table('post')->latest()->value('id');
        foreach ($matches as $match) {
            if ($match[0] === '#') {
                $exists = DB::table('htag')
                    ->select('body')
                    ->where('body', '=', $match)
                    ->value('body');
                if ($exists === null) {
                    $htag = new ModelHtags([
                        'body' => $match
                    ]);
                    $htag->save();
                    $idHtags = DB::table('htag')
                        ->select('id')
                        ->where('body', '=', $match)
                        ->value('id');
                    $joinHtag = new ModelJoinHtags([
                        'htag_id' => $idHtags,
                        'post_id' => $idPost
                    ]);
                    $joinHtag->save();
                } else {
                    $idHtags = DB::table('htag')
                        ->select('id')
                        ->where('body', '=', $match)
                        ->value('id');
                    $joinHtag = new ModelJoinHtags([
                        'htag_id' => $idHtags,
                        'post_id' => $idPost
                    ]);
                    $joinHtag->save();
                }
            }
        }

        if ($request->hasFile('file')) {
            $image = $request->file('file');
            $imagePath = $image->store('image', 'public');

            $idPost = DB::table('post')->latest()->value('id');

            $postImg = new ModelImgTweet([
                'post_id' => $idPost,
                'images_url' => $imagePath
            ]);
            $postImg->save();
        }
    }

    public function postCom(Request $request, $id)
    {
        $data = $request->validate([
            'text' => 'nullable|string',
            'userId' => 'string',
            'created_at' => 'date',
            'file' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:4096'
        ]);


        $post = new ModelPostTweet([
            'body' => $data['text'],
            'user_id' => $data['userId'],
            'post_id' => $id,
            'created_at' => DATE(NOW())
        ]);
        $post->save();

        if ($request->hasFile('file')) {
            $image = $request->file('file');
            $imagePath = $image->store('image', 'public');

            $idPost = DB::table('post')->latest()->value('id');

            $postImg = new ModelImgTweet([
                'post_id' => $idPost,
                'images_url' => $imagePath
            ]);
            $postImg->save();
        }
    }

    public function postLike(Request $request)
    {
        Log:error($request);
    }
}
