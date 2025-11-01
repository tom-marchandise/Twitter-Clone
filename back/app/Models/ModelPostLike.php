<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelPostLike extends Model
{
    use HasFactory;

    protected $table = '';

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'post_id',
        'created_at'
    ];
}
