class Article < ApplicationRecord
  belongs_to :user
  mount_uploader :image, ImageUploader
  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10 }
  has_many :comments, dependent: :destroy
end
