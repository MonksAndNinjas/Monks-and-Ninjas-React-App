class UsersController < ApplicationController

  def create
    render json: params, status: :created
  end
end
