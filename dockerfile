FROM hayd/alpine-deno:1.1.0

# Copy base app 
WORKDIR /app
COPY . .
EXPOSE 3000

# Start
CMD ["run","--allow-net","--allow-env", "--allow-read","--allow-write","--allow-plugin","--unstable","app.ts"]
