# Stage 1 - Priority Notification System

## Approach

Notifications are prioritized based on:

1. Type:
   - Placement (Highest)
   - Result
   - Event (Lowest)

2. Recency:
   - More recent notifications are prioritized

## Implementation

- Assigned weights:
  - Placement = 3
  - Result = 2
  - Event = 1

- Sorted notifications based on:
  1. Weight (descending)
  2. Timestamp (descending)

- Extracted top 10 notifications

## Efficiency

- Sorting complexity: O(n log n)
- Works efficiently for real-time updates

## Future Improvement

- Use priority queue for dynamic updates
