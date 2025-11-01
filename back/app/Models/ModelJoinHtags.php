<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelJoinHtags extends Model
{
    use HasFactory;

    protected $table = 'joinhtag';

    public $timestamps = false;

    protected $fillable = [
        'htag_id',
        'post_id'
    ];
}
