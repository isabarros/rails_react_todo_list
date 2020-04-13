if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_rails_react_todo_list', domain: 'your-frontend-domain'
else
  Rails.application.config.session_store :cookie_store, key: '_rails_react_todo_list' 
end