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
            $table->unsignedBigInteger('resident_id')->nullable();
            $table->string('title')->nullable();
            $table->enum('activity_type', ['Survey', 'Workshop', 'Meeting', 'Feedback', 'Volunteer']);
            $table->text('description')->nullable();
            $table->date('event_date')->nullable(false);
            $table->time('time')->nullable();
            $table->timestamps();
            
            $table->softDeletes();
            
            $table->foreign('resident_id')->references('id')->on('residents')->onDelete('set null');
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
