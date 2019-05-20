class UsersController < ApplicationController

  def index
    render json: session[:user_id]
  end

  def create
    user = User.find_by(username: params[:username])

    if user

      if user.password === params[:password]
        session[:user_id] = user.id

        render json: session[:user_id]
      else
        render json: {'error': 'login is not valid'}
      end

    else
      render json: {'error': 'login is not valid'}
    end
  end

  def destroy
    session.delete :user_id
  end

  private

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end
end
