from django.conf.urls import patterns, url

from kd_agent import views

urlpatterns = patterns('',

    url(r'^api/v1/namespaces/(?P<namespace>\w{1,64})/getk8soverview$',views.get_overview_info),
    url(r'^api/v1/namespaces/(?P<namespace>\w{1,64})/pods$',views.get_pod_list),
    url(r'^api/v1/namespaces/(?P<namespace>\w{1,64})/services$',views.get_service_list),
    url(r'^api/v1/namespaces/(?P<namespace>\w{1,64})/replicationcontrollers$',views.get_rc_list),
    url(r'^api/v1/namespaces/mytasklist$', views.get_mytask_list),
    url(r'^api/v1/namespaces/mytaskgraph$', views.get_mytask_graph),
    url(r'^download/$', views.download),
)
