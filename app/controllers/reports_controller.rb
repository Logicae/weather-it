class ReportsController < ApplicationController

    def index 
        render json: Report.all
    end 
        
    def create 
        report = Report.create(report_params)
        render json: report
    end 
        
    private 

    def report_params
        params.require(:report).permit(:city, :state, :temperature, :conditions)
    end 
      
end
