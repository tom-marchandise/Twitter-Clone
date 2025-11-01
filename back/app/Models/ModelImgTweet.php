<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelImgTweet extends Model
{
    use HasFactory;

    protected $table = 'images';

    public $timestamps = false;

    protected $fillable = [
        'post_id',
        'images_url'
    ];
}
