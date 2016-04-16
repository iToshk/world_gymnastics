Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#show'
  match "home" => "home#show", via: :getmatch
  match "about_web_site" => "about_web_site#show", via: :get
  match "mens_floor" => "mens_floor#show", via: :get
  match "pommel_horse" => "pommel_horse#show", via: :get
  match "rings" => "rings#show", via: :get
  match "mens_vault" => "mens_vault#show", via: :get
  match "parallel_bars" => "parallel_bars#show", via: :get
  match "horizontal_bar" => "horizontal_bar#show", via: :get
  match "womens_vault" => "womens_vault#show", via: :get
  match "uneven_bars" => "uneven_bars#show", via: :get
  match "balance_beam" => "balance_beam#show", via: :get
  match "womens_floor" => "womens_floor#show", via: :get

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
