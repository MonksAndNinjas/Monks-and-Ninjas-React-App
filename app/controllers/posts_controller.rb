class PostsController < ApplicationController
  def index
    @posts = Post.all
    render(
      status: 200,
      json: @posts
    )
  end

  def create
    title = params["post"]["title"]
    content = params["post"]["content"]

    @post = Post.new(title: title, content: content)

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end
end
