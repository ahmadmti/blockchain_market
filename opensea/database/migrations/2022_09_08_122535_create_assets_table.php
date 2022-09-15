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
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('link')->nullable();                     //Exteranl Link
            $table->text('description')->nullable();        
            $table->integer('collection_id');     
            $table->string('hidden_content')->nullable();           // Trigger
            $table->boolean('sensitive_content')->default(false); // Porngraphic Content     
            $table->integer('supply');                              // Number of Item Minted
            $table->integer('view')->default();                     // Count View Person
            $table->string('metadata')->nullable(); // Store Media on IPFS hash or nullabe
            $table->string('hash',100);             // Blockchain hash
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
        Schema::dropIfExists('assets');
    }
};
