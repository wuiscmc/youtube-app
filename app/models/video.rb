require 'net/http'
class Video 
	# we configure externally the URL (custom_configuration.yml)
	# in case we would need to change the source of the videos, we have only to change the config file
	VIDEO_SRC = APP_CONFIG['youtube_app']['video']['url'] 

	def self.find(id)
		Net::HTTP.get(URI(VIDEO_SRC.gsub("%{id}",id)))	
	end

end
