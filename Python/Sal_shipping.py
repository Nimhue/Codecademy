def cost_ground_shipping(weight):
  if weight <= 2:
    cost = weight * 1.5 + 20
    return cost
  elif weight <= 6:
    cost = weight * 3 + 20
    return cost
  elif weight <= 10:
    cost = weight * 4 + 20
    return cost
  else:
    cost = weight * 4.75 + 20
    return cost

# print(cost_ground_shipping(8.4))

premium_shipping = 125.0

def cost_drone_shipping(weight):
  if weight <= 2:
    cost = weigth * 4.5
    return cost
  elif weight <= 6:
    cost = weight * 9
    return cost
  elif weight <= 10:
    cost = weight *12
    return cost
  else:
    cost = weight * 14.25
    return cost

def cheapest_shipping_costs(weight):
  ground = cost_ground_shipping(weight)
  drone = cost_drone_shipping(weight)
  premium = premium_shipping

  if (ground < drone) and (ground < premium):
    shipping = "ground"
    cost = ground
  elif (premium < ground) and (premium < drone):
    shipping = "premium"
    cost = premium
  else:
    shipping = "drone"
    cost = drone
  
  print(f"The shipping method that is the cheapest is {shipping} with the price of {cost}$.")


print(cheapest_shipping_costs(4.8))
print(cheapest_shipping_costs(41.5))
  
