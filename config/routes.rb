Rails.application.routes.draw do
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  resources :users, only: [:create, :show, :index]
end
