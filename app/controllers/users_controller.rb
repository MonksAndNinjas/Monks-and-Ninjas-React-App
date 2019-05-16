class UsersController < ApplicationController

  def create
    user = User.find_by(username: params[:username])

    if user

      if user.password === params[:password]
        render json: user
      else
        render json: {'error': 'login is not valid'}
      end

    else
      render json: {'error': 'login is not valid'}
    end
  end
end
