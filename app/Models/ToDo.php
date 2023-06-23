<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToDo extends Model
{
    use HasFactory;

    protected $primarykey = 'id';

    protected $table = "to_dos";

    protected $fillable = [
        'user_id',
        'description',
        'is_completed',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
