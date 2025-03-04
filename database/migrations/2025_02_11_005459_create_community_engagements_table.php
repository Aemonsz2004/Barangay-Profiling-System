<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('community_engagements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('resident_id');
            $table->enum('activity_type', ['Survey', 'Meeting', 'Workshop', 'Volunteer']);
            $table->text('remarks')->nullable();
            $table->timestamps();
        
            $table->foreign('resident_id')->references('id')->on('residents')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('community_engagements');
    }
};
