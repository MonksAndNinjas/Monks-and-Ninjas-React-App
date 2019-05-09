class ReservationsController < ApplicationController
  def index
    @reservations = Reservation.all
    render(
      status: 200,
      json: @reservations
    )
  end

  def create
    #title = params["post"]["title"]
    #content = params["post"]["content"]
    #post_date = params["post"]["post_date"].to_s

    #@post = Post.new(title: title, content: content, post_date: post_date)

    #if @post.save
      render json: params, status: :created
    #else
      #render json: @post.errors, status: :unprocessable_entity
    #end
  end
end
