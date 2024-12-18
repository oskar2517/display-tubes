FILE = "static/collection.txt"

lines = File.read_lines(FILE)

sorted = lines.slice_when(&.empty?)
    .flat_map { |g| [g.first, *g[1..].reject(&.empty?).sort_by { |i| i.split[2..] }, ""] }
    .join("\n")

File.write(FILE, sorted)