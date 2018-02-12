#!/bin/bash

while read -r line; do
	echo "$line ....... processing"
	node index
	echo "$line - completed"
	echo "$line" >> outfile
	sleep 15
	sed '1d' infile > temp
	mv temp infile
done < "$1"