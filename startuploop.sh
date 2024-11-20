#!/bin/bash
while true; do
       hugo server --buildDrafts -p 3000 --bind 165.227.136.27 --baseURL http://165.227.136.27:3000/
       sleep 5
done;



