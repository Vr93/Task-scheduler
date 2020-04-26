FROM python:3.7.6

EXPOSE 80

RUN mkdir -p /.
WORKDIR /.

ADD requirements.txt requirements.txt
ADD app.py app.py
ADD static/ static/
ADD templates/ templates/

RUN pip install -r requirements.txt

CMD python app.py
