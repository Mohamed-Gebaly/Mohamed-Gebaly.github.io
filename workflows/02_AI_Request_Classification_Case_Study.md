# AI Request Classification — Portfolio Demo

## Overview
A credential-free n8n demonstration showing how an unstructured request can be prepared, classified and routed by priority.

## Flow
Request → Prepare Data → AI Classification Concept → Priority Check → Route

## Implementation note
The classification step is deterministic in this demo so it can run without external credentials. A production version can replace it with an LLM and validated structured output.
