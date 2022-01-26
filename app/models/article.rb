class Article < ApplicationRecord
  belongs_to :user
  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10 }
  has_many :comments
end
