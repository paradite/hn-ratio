for f in *.json; do mv "$f" "`echo $f | sed -r 's/_([0-9]+-)+[0-9]+//'`"; done
for f in *.txt; do mv "$f" "`echo $f | sed -r 's/_([0-9]+-)+[0-9]+//'`"; done
