Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'
  match "home" => "home#index", via: :getmatch
  match "about_web_site" => "about_web_site#index", via: :get
  match "code_of_points" => "code_of_points#index", via: :get

  namespace :code_of_points do
    get 'mens_floor', to: "mens_floor#show"
    get 'pommel_horse', to: "pommel_horse#show"
    get 'rings', to: "rings#show"
    get 'mens_vault', to: "mens_vault#show"
    get 'parallel_bars', to: "parallel_bars#show"
    get 'horizontal_bar', to: "horizontal_bar#show"
    get 'womens_vault', to: "womens_vault#show"
    get 'uneven_bars', to: "uneven_bars#show"
    get 'balance_beam', to: "balance_beam#show"
    get 'womens_floor', to: "womens_floor#show"
  end

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
