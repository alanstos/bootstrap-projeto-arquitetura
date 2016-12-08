		
		$('#navbar-menu').on('hide.bs.collapse',function(){	
			
			$('.banner-header').css('transform','translate(-50%,-50%)');

		});	

		$('#navbar-menu').on('show.bs.collapse',function(){	
			
			$('.banner-header').css('transform','translate(-50%,25%)');
			
		});		