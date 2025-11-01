<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class modelFollow extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'follow';

    protected $fillable = [
        'follower_user_id',
        'followed_user_id',
        'followed_created_at'
    ];

}
