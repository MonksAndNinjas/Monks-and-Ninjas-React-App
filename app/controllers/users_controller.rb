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

    render json: {'message': 'sessions deleted'}
  end
end
