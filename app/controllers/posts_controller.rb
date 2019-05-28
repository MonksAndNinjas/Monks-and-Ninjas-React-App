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
    post_date = params["post"]["post_date"].to_s

    @post = Post.new(title: title, content: content, post_date: post_date)

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy

    render json: { message: 'Post successfully deleted' }
  end
end
