# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  lat         :float            not null
#  lng         :float            not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Api::BenchesController < ApplicationController

  def create
    @bench = Bench.new
    @bench.create!(bench_params)
    redirect_to api_benches_url
  end

  def index
    @benches = Bench.all
    render :index
  end

  private
  def bench_params
    params.require(:bench).permit(:lat, :lng, :description)
  end

end
