class VideosController < ApplicationController

  respond_to :js, :html
  
  # GET /videos
  # GET /videos.json
  def index
  end

  def search
  	@video = Video.find(params[:id])
  end

end
