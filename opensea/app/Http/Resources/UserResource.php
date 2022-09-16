<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'        => $this->id,
            'uuid'      => $this->uuid,
            'username'  => $this->username,
            'email'     => $this->email,
            'hash'      => $this->hash,
            'token'      => $this->token,
            'bio'       => $this->bio,
            'link'      => $this->link,
            'twitter_link'  => $this->twitter_link,
            'instagram_link'=> $this->instagram_link,
        ];
    }
}
