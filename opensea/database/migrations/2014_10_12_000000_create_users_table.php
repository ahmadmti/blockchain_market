<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
        /*
            User Banner Polymorphic Table
            User Images Polymorphic Table
        */
        
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->default(DB::raw('(UUID())'));
            $table->string('username')->nullable();
            $table->string('bio')->nullable();
            $table->string('link')->nullable()->comment('website link');
            $table->string('twitter_link')->nullable();
            $table->string('instagram_link')->nullable();
            $table->string('hash');
            $table->string('email')->nullable()->unique();
            $table->string('token')->nullable()->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
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
