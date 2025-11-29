FILE = "static/collection.txt"

lines = File.read_lines(FILE)

sorted = lines.select(&.starts_with?('-'))
    .map(&.split[1].gsub(/[x~]/, ""))
    .map(&.to_i).sum

puts sorted