<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {

            $table->id();
            
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('phone');

            $table->date('birthday')->nullable();
            $table->string('address')->nullable();
            $table->string('gender')->nullable();

            $table->unsignedBigInteger('cover_image')->nullable();
            $table->foreign('cover_image')->references('id')->on('files');


            $table->unsignedBigInteger('profile_image')->nullable();
            $table->foreign('profile_image')->references('id')->on('files');


            $table -> timestamps();
            $table->dateTime('last_login')->default(DB::raw('CURRENT_TIMESTAMP'));

            $table->rememberToken();
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
