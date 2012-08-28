from django.shortcuts import render_to_response
from django.template import RequestContext
from django.conf import settings


def handler404(request, template_name='404.html'):
    """
    Loads 404 page while passing scope
    """
    scope = settings.CURRENT_SCOPE
    return render_to_response(template_name, RequestContext(request, {
        'params': {'scope': scope},
    }))

def handler500(request, template_name='500.html'):
    """
    Loads 500 page while passing scope
    """
    scope = settings.CURRENT_SCOPE
    return render_to_response(template_name, RequestContext(request, {
        'params': {'scope': scope},
    }))
