############################################
# Stage 1: Install Runtime Dependencies     #
############################################
FROM python:3.10.12-slim AS builder
WORKDIR /app

# Install application requirements in an isolated builder stage
COPY requirements.txt requirements-dev.txt ./
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

############################################
# Stage 2: Prepare Production-Ready Image   #
############################################
FROM python:3.10.12-slim
WORKDIR /app

# Install curl for healthchecks
USER root
RUN apt-get update \
    && apt-get install -y --no-install-recommends curl \
    && rm -rf /var/lib/apt/lists/*

# Enforce least-privilege by running as a dedicated non-root user
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Copy installed packages along with console entry points
COPY --from=builder /usr/local/lib/python3.10/site-packages /usr/local/lib/python3.10/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin

# Copy application code and configuration files
COPY . .

# Switch to non-root for improved security
USER appuser

# Expose service port and define container startup command
EXPOSE 8000
ENTRYPOINT ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
