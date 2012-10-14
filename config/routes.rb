YoutubeApp::Application.routes.draw do
  resources :videos, only: [:search, :index] do
  	get "search", on: :collection
  end
  root to: "videos#index"
end
